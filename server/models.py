from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

from config import db

class Venue(db.Model, SerializerMixin):
    __tablename__ = 'venues'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    location = db.Column(db.String)
    link = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    concerts = db.relationship('Concert', back_populates='venue', cascade='all, delete-orphan')
    reviews = db.relationship('Review', back_populates='venue', cascade='all, delete-orphan')

    artists = association_proxy('concerts', 'venue')

    serialize_rules = (
        '-concerts.venue', 
        '-reviews.venue', 
        '-artists.venues',
        '-created_at',
        '-updated_at'
        )

    def __repr__(self):
        return f'<Venue {self.id}: {self.name}>'

class Artist(db.Model, SerializerMixin):
    __tablename__ = 'artists'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    genre = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    concerts = db.relationship('Concert', back_populates='artist', cascade='all, delete-orphan')

    venues = association_proxy('concerts', 'artist')

    serialize_rules = (
        '-concerts.artist', 
        '-venues.artists',
        '-created_at',
        '-updated_at'
        )

    def __repr__(self):
        return f'<Artist {self.id}: {self.name}>'

class Concert(db.Model, SerializerMixin):
    __tablename__ = 'concerts'

    id = db.Column(db.Integer, primary_key=True)
    date_time = db.Column(db.DateTime, nullable=False)
    tix_low = db.Column(db.Integer)
    sold_out = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    artist_id = db.Column(db.Integer, db.ForeignKey('artists.id'))
    venue_id = db.Column(db.Integer, db.ForeignKey('venues.id'))

    artist = db.relationship('Artist', back_populates='concerts')
    venue = db.relationship('Venue', back_populates='concerts')

    serialize_rules = (
        '-artist.concerts', 
        '-venue.concerts',
        '-created_at',
        '-updated_at',
        '-venue.reviews',
        '-venue.link',
        '-artist_id',
        '-venue_id',
        '-date_time',
        )

    @property
    def date(self):
        return self.date_time.date().strftime('%m/%d/%Y')

    @property
    def time(self):
        return self.date_time.time().strftime('%I:%M %p')

    def __repr__(self):
        return f'<Concert {self.id}:\nArtist:{self.artist}\nVenue:{self.venue}>'

class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    review_text = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    venue_id = db.Column(db.Integer, db.ForeignKey('venues.id'))

    venue = db.relationship('Venue', back_populates='reviews')

    serialize_rules = (
        '-venue.reviews',
        '-created_at',
        '-updated_at')

    def __repr__(self):
        return f'<Review {self.id}>'