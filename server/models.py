from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
import re
from datetime import datetime

from config import db

class Venue(db.Model, SerializerMixin):
    __tablename__ = 'venues'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    location = db.Column(db.String)
    link = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    concerts = db.relationship('Concert', order_by='Concert.date_time', back_populates='venue', cascade='all, delete-orphan')

    artists = association_proxy('concerts', 'venue')

    serialize_rules = (
        '-concerts.venue', 
        '-artists.venues',
        '-created_at',
        '-updated_at'
        )
    
    @validates('name')
    def validates_name(self, _, new_name):
        if not isinstance(new_name, str):
            raise TypeError(
                'Name must be a string.'
            )
        elif not len(new_name) in range(1, 31):
            raise ValueError(
                'Name must be between 1 and 30 characters.'
            )
        return new_name
    
    @validates('location')
    def validates_location(self, _, new_location):
        if not isinstance(new_location, str):
            raise TypeError("location must be a string")
        
        return new_location

    @validates('link')
    def validates_link(self, _, new_link):
        pattern = re.compile(
            r'^(http|https)://'  # Check for http:// or https:// at the beginning
            r'([a-zA-Z0-9-.]+(\.[a-zA-Z]{2,})+(/.*)?)$'  # Valid domain and optional path
        )
        if not pattern.match(new_link) and new_link != None:
            raise ValueError(
                'Link must be a valid URL.'
            )
        return new_link
        
    def __repr__(self):
        return f'<Venue {self.id}: {self.name}>'

class Artist(db.Model, SerializerMixin):
    __tablename__ = 'artists'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    genre = db.Column(db.String)
    description = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    concerts = db.relationship('Concert', order_by='Concert.date_time', back_populates='artist', cascade='all, delete-orphan')

    venues = association_proxy('concerts', 'artist')

    serialize_rules = (
        '-concerts.artist', 
        '-venues.artists',
        '-created_at',
        '-updated_at'
        )
    
    @validates('name')
    def validates_name(self, _, new_name):
        if not isinstance(new_name, str):
            raise TypeError(
                'Name must be a string.'
            )
        return new_name
    
    @validates('genre')
    def validates_genre(self, _, new_genre):
        if not isinstance(new_genre, str):
            raise TypeError(
                'Genre must be a string.'
            )
        elif not len(new_genre) in range(1, 21):
            raise ValueError(
                'Genre must be between 1 and 20 characters.'
            )
        return new_genre

    def __repr__(self):
        return f'<Artist {self.id}: {self.name}>'
    
    @validates('description')
    def validates_description(self, _, new_description):
        if not isinstance(new_description, str):
            raise TypeError(
                'Description must be a string.'
            )
        return new_description

    def __repr__(self):
        return f'<Artist {self.id}: {self.name}>'

class Concert(db.Model, SerializerMixin):
    __tablename__ = 'concerts'

    id = db.Column(db.Integer, primary_key=True)
    date_time = db.Column(db.DateTime, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    tix_low = db.Column(db.Integer)
    sold_out = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    artist_id = db.Column(db.Integer, db.ForeignKey('artists.id'))
    venue_id = db.Column(db.Integer, db.ForeignKey('venues.id'))

    artist = db.relationship('Artist', back_populates='concerts')
    venue = db.relationship('Venue', back_populates='concerts')

    @property
    def date(self):
        return self.date_time.date().strftime('%m/%d/%Y')

    @property
    def time(self):
        return self.date_time.time().strftime('%I:%M %p')

    serialize_rules = (
        '-artist.concerts', 
        '-venue.concerts',
        '-created_at',
        '-updated_at',
        '-venue.link',
        '-artist_id',
        '-venue_id',
        '-date_time',
        'date',
        'time'
        )

    @validates('date_time')
    def validates_date_time(self, _, new_date_time):
        if not isinstance(new_date_time, datetime):
            raise TypeError(
                'date_time must be a valid datetime object.'
            )
        return new_date_time
    
    @validates('price')
    def validates_price(self, _, new_price):
        if not isinstance(new_price, int):
            raise TypeError(
                'Price must be an integer.'
            )
        elif new_price <= 0:
            raise ValueError(
                'Price must be a positive integer.'
            )
        return new_price
    
    @validates('tix_low')
    def validates_tix_low(self, _, new_tix_low):
        if not isinstance(new_tix_low, int):
            raise TypeError(
                'tix_low must be an integer.'
            )
        return new_tix_low
    
    @validates('sold_out')
    def validates_sold_out(self, _, new_sold_out):
        if not isinstance(new_sold_out, int):
            raise TypeError(
                'sold_out must be an integer.'
            )
        return new_sold_out
    
    @validates('artist_id')
    def validate_artist_id(self, _, new_artist_id):
        if new_artist_id == None:
            raise ValueError(
                'Artist ID is required.'
                )
        artist = db.session.get(Artist, new_artist_id)
        if not artist:
            raise ValueError(
                'That artist does not exist in the database.'
                )
        self.artist = artist
        return new_artist_id
    
    @validates('venue_id')
    def validate_venue_id(self, _, new_venue_id):
        if new_venue_id == None:
            raise ValueError(
                'Venue ID is required.'
                )
        venue = db.session.get(Venue, new_venue_id)
        if not venue:
            raise ValueError(
                'That venue does not exist in the database.'
                )
        self.venue = venue
        return new_venue_id

    def __repr__(self):
        return f'<Concert {self.id}:\nArtist:{self.artist}\nVenue:{self.venue}>'
