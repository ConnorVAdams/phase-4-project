from datetime import datetime, timedelta
from random import randint

def round_to_nearest_half_hour(dt):
    new_minute = 0 if dt.minute < 15 else 30
    rounded_dt = dt.replace(second=0, microsecond=0, minute=new_minute)
    return rounded_dt

def rand_date(interval=180):
    current_time = datetime.now()
    future_date = current_time + timedelta(days=interval)
    dt = current_time + timedelta(days=randint(0, (future_date - current_time).days))
    random_hour = randint(17, 23)
    dt = dt.replace(hour=random_hour, minute=randint(0, 1) * 30)
    return round_to_nearest_half_hour(dt)