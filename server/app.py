#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource
from datetime import datetime

# Local imports
from config import app, db, api

# Add your model imports
from models import db, Venue, Artist, Concert

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

# *************
# ARTIST ROUTES
# *************

class Artists(Resource):

    def get(self):
        artists = [artist.to_dict(
            rules=(
                '-concerts',
            )
        ) for artist in Artist.query]
        return artists, 200
    
    def post(self):
        try:
            data = request.get_json()
            new_artist = Artist(**data)
            db.session.add(new_artist)
            db.session.commit()
            return new_artist.to_dict(), 201
        except Exception as e:
            db.session.rollback()
            return {'error': str(e)}, 400
    
api.add_resource(Artists, '/artists')

class ArtistByID(Resource):

    def get(self, id):
        if artist := db.session.get(Artist, id):
            return artist.to_dict(
                rules=(
                )
            ), 200
        return {'error': f'No artist with ID {id} found.'}, 404
    
    def patch(self, id):
        data = request.get_json()

        if artist := db.session.get(Artist, id):
            try:
                for attr in data:
                    setattr(artist, attr, data[attr])
                db.session.add(artist)
                db.session.commit()
                return artist.to_dict(), 202
            except Exception as e:
                db.session.rollback()
                return {'error': str(e)}, 400
        return {'error': f'No artist with ID {id} found.'}, 404
    
    def delete(self, id):
        if artist := db.session.get(Artist, id):
            try:
                db.session.delete(artist)
                db.session.commit()
                return '', 204
            except Exception as e:
                db.session.rollback()
                return {'error': str(e)}, 422
        return {'error': f'No artist with ID {id} found.'}, 404

api.add_resource(ArtistByID, '/artists/<int:id>')

class ConcertsForArtist(Resource):

    def get(self, id):
        if artist := db.session.get(Artist, id):
            return [concert.to_dict() for concert in artist.concerts], 200
        return {'error': f'No artist with ID {id} found.'}, 404

api.add_resource(ConcertsForArtist, '/artists/<int:id>/concerts')

# ************
# VENUE ROUTES
# ************

class Venues(Resource):

    def get(self):
        venues = [venue.to_dict(
            rules=(
                '-concerts',
            ) 
        ) for venue in Venue.query]
        return venues, 200
    
    def post(self):
        try:
            data = request.get_json()
            new_venue = Artist(**data)
            db.session.add(new_venue)
            db.session.commit()
            return new_venue.to_dict(), 201
        except Exception as e:
            db.session.rollback()
            return {'error': str(e)}, 400

api.add_resource(Venues, '/venues')

class VenueByID(Resource):

    def get(self, id):
        if venue := db.session.get(Venue, id):
            return venue.to_dict(
                rules=(

                )
            ), 200
        return {'error': f'No venue with ID {id} found.'}, 404
    
    def patch(self, id):
        data = request.get_json()

        if venue := db.session.get(Venue, id):
            try:
                for attr in data:
                    setattr(venue, attr, data[attr])
                db.session.add(venue)
                db.session.commit()
                return venue.to_dict(), 202
            except Exception as e:
                db.session.rollback()
                return {'error': str(e)}, 400
        return {'error': f'No venue with ID {id} found.'}, 404
    
    def delete(self, id):
        if venue := db.session.get(Venue, id):
            try:
                db.session.delete(venue)
                db.session.commit()
                return '', 204
            except Exception as e:
                db.session.rollback()
                return {'error': str(e)}, 422
        return {'error': f'No venue with ID {id} found.'}, 404

api.add_resource(VenueByID, '/venues/<int:id>')

class ConcertsForVenue(Resource):

    def get(self, id):
        if venue := db.session.get(Venue, id):
            return [concert.to_dict(
                rules=(
                    '-venue',
                )
            ) for concert in venue.concerts], 200
        return {'error': f'No venue with ID {id} found.'}, 404

api.add_resource(ConcertsForVenue, '/venues/<int:id>/concerts')

# **************
# CONCERT ROUTES
# **************
class Concerts(Resource):

    def get(self):
        concerts = [concert.to_dict(
            rules=(

            )
        ) for concert in Concert.query.order_by(Concert.date_time)]
        return concerts, 200
    
    def post(self):
        try:
            data = request.get_json()
            data['date_time'] = datetime.strptime(data['date_time'], '%Y-%m-%d %H:%M')
            new_concert = Concert(**data)
            db.session.add(new_concert)
            db.session.commit()
            return new_concert.to_dict(), 201
        except Exception as e:
            db.session.rollback()
            return {'error': str(e)}, 400

api.add_resource(Concerts, '/concerts')

class ConcertAndArtist(Resource):
    def post(self):
        try:
            data = request.get_json()

            concert_data = {
                'date_time': data['date_time'],
                'price': data['price'],
                'artist_id': data['artist_id'],
                'venue_id': data['venue_id'],
                'tix_low': data['tix_low'],
                'sold_out': data['sold_out'],
            }

            artist_data = {
                'name': data['artist_name'],
                'genre': data['artist_genre'],
                'description': data['artist_description']
            }

            try:
                artist_response = requests.post('http://127.0.0.1:5555/api/v1/artists', json=artist_data)
                artist_response_data = artist_response.json()

                concert_data['artist_id'] = artist_response_data['id']

            except Exception as e:
                db.session.rollback()
                return {'error': str(e)}, 400
            
            try:
                concert_response = requests.post('http://127.0.0.1:5555/api/v1/concerts', json=concert_data)

            except Exception as e:
                db.session.rollback()
                return {'error': str(e)}, 400
            
        except Exception as e:
            db.session.rollback()
            return {'error': str(e)}, 400
api.add_resource(ConcertAndArtist, '/concert_and_artist')


class ConcertByID(Resource):

    def get(self, id):
        if concert := db.session.get(Concert, id):
            return concert.to_dict(
            ), 200
        return {'error': f'No concert with ID {id} found.'}, 404
    
    def patch(self, id):
        data = request.get_json()

        if concert := db.session.get(Concert, id):
            try:
                for attr in data:
                    setattr(concert, attr, data[attr])
                db.session.add(concert)
                db.session.commit()
                return concert.to_dict(), 202
            except Exception as e:
                db.session.rollback()
                return {'error': str(e)}, 400
        return {'error': f'No concert with ID {id} found.'}, 404
    
    def delete(self, id):
        if concert := db.session.get(Concert, id):
            try:
                db.session.delete(concert)
                db.session.commit()
                return '', 204
            except Exception as e:
                db.session.rollback()
                return {'error': str(e)}, 422
        return {'error': f'No concert with ID {id} found.'}, 404

api.add_resource(ConcertByID, '/concerts/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

