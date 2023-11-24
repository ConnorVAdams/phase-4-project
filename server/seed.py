#!/usr/bin/env python3

# Standard library imports
from random import randint, choices, choice as rc
from datetime import datetime, timedelta

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Venue, Artist, Concert, Review
from helpers import rand_date

fake = Faker()

def create_artists():
    artists = []
    for _ in range(10):
        a = Artist(
            name = f'The {fake.word()}s',
            genre = rc(['Classical', 'Alternative', 'Rock', 'Hip Hop', 'Jam', 'Electronic', 'Reggae', 'Folk'])
        )
        artists.append(a)
    
    return artists

def create_venues():
    venues = []
    for _ in range(5):
        v = Venue(
            name = f'{fake.first_name()}\'s',
            location = rc(['Downtown', 'Westside', 'Broadway'])
        )
        venues.append(v)
    
    return venues

def create_concerts():
    concerts = []
    artist_ids = [artist.id for artist in Artist.query.all()]  # Get all artist IDs
    venue_ids = [venue.id for venue in Venue.query.all()]  # Get all venue IDs

    for _ in range(20):
        c = Concert(
            date_time=rand_date(),
            tix_low=choices([True, False], weights=[0.15, 0.85], k=1)[0],
            sold_out=False,
            artist_id=rc(artist_ids),  # Randomly choose from available artist IDs
            venue_id=rc(venue_ids)  # Randomly choose from available venue IDs
        )
        concerts.append(c)

    return concerts

def create_reviews():
    reviews = []
    venue_ids = [venue.id for venue in Venue.query.all()]  # Get all venue IDs

    for _ in range(10):
        r = Review(
            review_text='Lorem ipsum dolor sit amet...',
            venue_id=rc(venue_ids)  # Randomly choose from available venue IDs
        )
        reviews.append(r)

    return reviews

if __name__ == '__main__':
    
    with app.app_context():
        print("clearing db...")
        Artist.query.delete()
        Venue.query.delete()
        Concert.query.delete()
        Review.query.delete()

        print('Seeding artists...')
        artists = create_artists()
        db.session.add_all(artists)
        db.session.commit()

        print('Seeding venues...')
        venues = create_venues()
        db.session.add_all(venues)
        db.session.commit()

        print('Seeding concerts...')
        concerts = create_concerts()
        db.session.add_all(concerts)
        db.session.commit()

        print('Seeding reviews...')
        reviews = create_reviews()
        db.session.add_all(reviews)
        db.session.commit()

        print("Done seeding!")