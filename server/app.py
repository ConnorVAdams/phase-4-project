#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api

# Add your model imports
from models import db, Venue, Artist, Concert, Review

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class Artists(Resource):

    def get(self):
        artists = [artist.to_dict(
            rules=(
                '-concerts',
            )
        ) for artist in Artist.query]
        return artists, 200
    
api.add_resource(Artists, '/artists')

class ArtistByID(Resource):

    def get(self, id):
        if artist := db.session.get(Artist, id):
            return artist.to_dict(
                rules=(
                    'concerts.date',
                    'concerts.time'
                )
            ), 200
        return {'error': f'No artist with id {self.id} found.'}

api.add_resource(ArtistByID, '/artists/<int:id>')

class Venues(Resource):

    def get(self):
        venues = [venue.to_dict(
            rules=(
                '-concerts',
            ) 
        ) for venue in Venue.query]
        return venues, 200

api.add_resource(Venues, '/venues')

class VenueByID(Resource):

    def get(self, id):
        if venue := db.session.get(Venue, id):
            return venue.to_dict(
                rules=(

                )
            ), 200
        return {'error': f'No venue with id {self.id} found.'}

api.add_resource(VenueByID, '/venues/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

