#!/usr/bin/env python3

# Standard library imports
from random import randint, choices, choice as rc
from datetime import datetime, timedelta

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Venue, Artist, Concert
from helpers import rand_date

fake = Faker()

def create_artists():
    artists = []
    
    skrillex = Artist(name="Skrillex", genre="Dubstep", description="Skrillex, born Sonny John Moore on January 15, 1988, is an American electronic music producer, DJ, and singer-songwriter. Renowned for his contributions to the dubstep genre, Skrillex gained widespread recognition in 2010 with his EP \"Scary Monsters and Nice Sprites.\" His music is known for its aggressive style and complex sound design, characterized by massive bass drops and intricate synthesizer work.")
    
    deadmau5 = Artist(name="Deadmau5", genre="Progressive House", description="Deadmau5, the stage name of Joel Zimmerman, born January 5, 1981, is a Canadian electronic music producer and DJ. Known for his iconic mouse helmet, Deadmau5 has been a major influence in the progressive house scene with hits like 'Strobe' and 'Ghosts 'n' Stuff.' His work is characterized by his use of various styles and forms in electronic music.")

    calvin_harris = Artist(name="Calvin Harris", genre="Electropop", description="Calvin Harris, born Adam Richard Wiles on January 17, 1984, is a Scottish DJ, record producer, singer, and songwriter. He is known for his chart-topping hits such as 'Feel So Close' and 'Summer.' Harris has received numerous awards and nominations, including a Grammy Award, and is known for his collaborations with various artists.")

    tiesto = Artist(name="Tiesto", genre="Trance", description="Tiësto, born Tijs Michiel Verwest on January 17, 1969, is a Dutch DJ and record producer. He is considered one of the pioneers of the trance genre and has expanded his style to incorporate various forms of electronic music. Tiësto is known for his energetic live shows and hits like 'Adagio for Strings' and 'Red Lights.'")

    david_guetta = Artist(name="David Guetta", genre="Electro House", description="David Guetta, born November 7, 1967, is a French DJ, record producer, and songwriter. He has achieved mainstream success with albums like 'One Love' and 'Nothing but the Beat.' Guetta is known for his collaborations with top artists and has helped bridge the gap between electronic music and mainstream pop.")

    zedd = Artist(name="Zedd", genre="Electro Pop", description="Zedd, born Anton Zaslavski on September 2, 1989, is a Russian-German DJ, record producer, and songwriter. Known for hits like 'Clarity' and 'Stay,' Zedd has a classical music background that influences his electronic music production, creating a unique and melodic sound.")

    martin_garrix = Artist(name="Martin Garrix", genre="Progressive House", description="Martin Garrix, born Martijn Gerard Garritsen on May 14, 1996, is a Dutch DJ and record producer. He gained fame with his hit 'Animals' and has since become one of the leading figures in electronic dance music, known for his energetic performances and catchy productions.")

    diplo = Artist(name="Diplo", genre="Moombahton", description="Diplo, born Thomas Wesley Pentz on November 10, 1978, is an American DJ, songwriter, and record producer. He is the co-creator and lead member of the electronic dancehall music project Major Lazer. Diplo is known for his eclectic and innovative music style, blending various genres.")

    marshmello = Artist(name="Marshmello", genre="Future Bass", description="Marshmello, an anonymous figure in the music industry, is an American electronic music producer and DJ known for wearing a custom helmet for public appearances. His music includes hits like 'Alone' and 'Silence,' characterized by a blend of future bass, trap, and electronic elements.")

    kygo = Artist(name="Kygo", genre="Tropical House", description="Kygo, born Kyrre Gørvell-Dahll on September 11, 1991, is a Norwegian DJ and record producer. He gained international attention with his remix of 'I See Fire' by Ed Sheeran and is known for his unique tropical house sound, which includes elements of electronic and chill-out music.")

    porter_robinson = Artist(name="Porter Robinson", genre="Electropop", description="Porter Robinson, born July 15, 1992, is an American DJ, record producer, musician, and singer. His music style has evolved over the years, with albums like 'Worlds' and 'Nurture' showcasing his shift from electro house to a more diverse, experimental sound.")

    armin_van_buuren = Artist(name="Armin Van Buuren", genre="Trance", description="Armin van Buuren, born December 25, 1976, is a Dutch DJ and record producer. He is known for his contributions to the trance genre and has been a dominant figure in the electronic dance music scene for decades. His radio show 'A State of Trance' has a massive global following.")

    steve_aoki = Artist(name="Steve Aoki", genre="Electro House", description="Steve Aoki, born November 30, 1977, is an American DJ, record producer, and music executive. Known for his energetic live shows, Aoki has collaborated with various artists and is recognized for his remixes and original tracks like 'Boneless' and 'Just Hold On.'")

    afrojack = Artist(name="Afrojack", genre="Dutch House", description="Afrojack, born Nick van de Wall on September 9, 1987, is a Dutch DJ, record producer, and remixer. He is known for his distinctive style in the Dutch house genre and has produced hits like 'Take Over Control' and 'The Spark.'")

    alesso = Artist(name="Alesso", genre="Progressive House", description="Alesso, born Alessandro Lindblad on July 7, 1991, is a Swedish DJ and record producer. He is known for his work in the progressive house genre, with hits like 'Heroes' and 'Under Control.' Alesso's music is characterized by its emotive and melodic style.")

    kaskade = Artist(name="Kaskade", genre="Progressive House", description="Kaskade, born Ryan Gary Raddon on February 25, 1971, is an American DJ and record producer. He is a prominent figure in the progressive house scene and is known for his smooth, melodic style and tracks like 'Atmosphere' and 'I Remember.'")

    hardwell = Artist(name="Hardwell", genre="Big Room House", description="Hardwell, born Robbert van de Corput on January 7, 1988, is a Dutch DJ, record producer, and remixer.")
    
    above_and_beyond = Artist(name="Above and Beyond", genre="Trance", description="Above & Beyond, an English electronic music group formed in 2000, consists of Jono Grant, Tony McGuinness, and Paavo Siljamäki. Known for their contributions to the trance genre, they have a loyal global fanbase and are famous for their Group Therapy Radio show.")

    eric_prydz = Artist(name="Eric Prydz", genre="Progressive House", description="Eric Prydz, a Swedish DJ and producer born on July 19, 1976, is known for his unique style in progressive house and techno. He is also known for his aliases Pryda and Cirez D, under which he releases different styles of electronic music.")

    chainsmokers = Artist(name="The Chainsmokers", genre="Electro Pop", description="The Chainsmokers, an American electronic DJ and production duo consisting of Alexander 'Alex' Pall and Andrew 'Drew' Taggart, became famous for their hit 'Selfie' and later achieved wide acclaim with songs like 'Closer' and 'Don't Let Me Down.'")

    rl_grime = Artist(name="RL Grime", genre="Trap", description="RL Grime, born Henry Steinway on February 8, 1991, is an American electronic music producer and DJ known for his work in the trap and bass music genres. His unique style blends elements of hip-hop with electronic music.")

    flume = Artist(name="Flume", genre="Future Bass", description="Flume, an Australian record producer, musician, and DJ born on November 5, 1991, as Harley Edward Streten, gained international acclaim with his self-titled debut studio album. His style is a mix of electronic elements with future bass.")

    illenium = Artist(name="Illenium", genre="Melodic Dubstep", description="Illenium, born Nicholas D. Miller on December 26, 1990, is an American musician, DJ, and producer. Known for his melodic dubstep and emotional electronic music, Illenium has gained a significant following for his poignant and introspective tracks.")

    excision = Artist(name="Excision", genre="Dubstep", description="Excision, the stage name of Jeff Abel, is a Canadian producer and DJ known for his aggressive style of dubstep. His music features heavy bass and intricate sound designs, making him a prominent figure in the dubstep community.")

    alison_wonderland = Artist(name="Alison Wonderland", genre="Trap", description="Alison Wonderland, an Australian electronic dance music producer, DJ, and singer, has been a significant figure in the EDM scene with her unique blend of electronic, trap, and future bass.")

    seven_lions = Artist(name="Seven Lions", genre="Melodic Dubstep", description="Seven Lions, born Jeff Montalvo on March 31, 1987, is an American DJ, record producer, instrumentalist, and remixer. He is known for his melodic dubstep style and for incorporating elements of trance and electro house into his music.")

    nicky_romero = Artist(name="Nicky Romero", genre="Progressive House", description="Nicky Romero, a Dutch DJ and music producer born on January 6, 1989, has gained international fame in the electronic music scene. Known for his viral hit 'Toulouse' and collaboration on 'I Could Be the One' with Avicii.")


    artists.extend([skrillex, deadmau5, calvin_harris, tiesto, david_guetta, zedd, martin_garrix, diplo, marshmello, kygo, porter_robinson, armin_van_buuren, steve_aoki, afrojack, alesso, kaskade, hardwell, above_and_beyond, eric_prydz, chainsmokers, rl_grime, flume, illenium, excision, alison_wonderland, seven_lions, nicky_romero])
    
    return artists

def create_venues():
    venues = []
    
    brooklynMirage = Venue(name="Brooklyn Mirage", location="Brooklyn")
    
    redRocks = Venue(name="Red Rocks Amphitheatre", location="Colorado")
    
    billGrahamCivic = Venue(name="Bill Graham Civic Auditorium", location="San Francisco")

    echostage = Venue(name="Echostage", location="Washington D.C.")

    theGorgeAmphitheatre = Venue(name="The Gorge Amphitheatre", location="Washington")

    omniaNightclub = Venue(name="Omnia Nightclub", location="Las Vegas")

    prysmNightclub = Venue(name="PRYSM Nightclub", location="Chicago")

    exchangeLA = Venue(name="Exchange LA", location="Los Angeles")

    websterHall = Venue(name="Webster Hall", location="New York City")

    theMidwaySF = Venue(name="The Midway SF", location="San Francisco")

    spaceMiami = Venue(name="Club Space", location="Miami")
    
    avalonHollywood = Venue(name="Avalon Hollywood", location="Los Angeles")

    outputBrooklyn = Venue(name="Output", location="Brooklyn")

    betaNightclub = Venue(name="Beta Nightclub", location="Denver")

    soundBarChicago = Venue(name="Sound-Bar", location="Chicago")

    stereoLiveHouston = Venue(name="Stereo Live", location="Houston")

    giltNightclub = Venue(name="Gilt Nightclub", location="Orlando")

    elektricity = Venue(name="Elektricity", location="Pontiac")

    templeSF = Venue(name="Temple Nightclub", location="San Francisco")

    marqueeNewYork = Venue(name="Marquee Nightclub", location="New York City")

    foundationNightclub = Venue(name="Foundation Nightclub", location="Seattle")

    
    venues.extend([brooklynMirage, redRocks, billGrahamCivic, echostage, theGorgeAmphitheatre, omniaNightclub,   prysmNightclub, exchangeLA, websterHall, theMidwaySF, spaceMiami, avalonHollywood, outputBrooklyn, betaNightclub, soundBarChicago, stereoLiveHouston, giltNightclub, elektricity, templeSF, marqueeNewYork, foundationNightclub]) 
    
    return venues

def create_concerts():
    concerts = []
    artist_ids = [artist.id for artist in Artist.query.all()]  # Get all artist IDs
    venue_ids = [venue.id for venue in Venue.query.all()]  # Get all venue IDs

    for _ in range(100):
        tix_low = choices([True, False], weights=[0.30, 0.70], k=1)[0]

        # If tix_low is True, sold_out is False. Otherwise, 40% chance for sold_out to be True.
        if tix_low:
            sold_out = False
        else:
            sold_out = choices([True, False], weights=[0.40, 0.60], k=1)[0]

        c = Concert(
            date_time=rand_date(),
            price=round(randint(20, 76) / 5) * 5,
            tix_low=tix_low,
            sold_out=sold_out,
            artist_id=rc(artist_ids),  # Randomly choose from available artist IDs
            venue_id=rc(venue_ids)  # Randomly choose from available venue IDs
        )
        concerts.append(c)

    return concerts

if __name__ == '__main__':
    
    with app.app_context():
        print("clearing db...")
        Artist.query.delete()
        Venue.query.delete()
        Concert.query.delete()

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

        print("Done seeding!")