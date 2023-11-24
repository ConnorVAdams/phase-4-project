from datetime import datetime, timedelta
from random import randint

def parse_date(date):
    if isinstance(date, str):
        return datetime.strptime(date, '%m/%d/%Y')
    elif isinstance(date, datetime):
        return datetime.strftime(date, '%-m/%-d/%Y')
    else:
        raise TypeError(
            'Date must be a valid datetime object or a date string.'
            )
    
def rand_date(interval=180):
    current_time = datetime.now()
    future_date = current_time + timedelta(days=interval)
    return current_time + timedelta(days=randint(0, (future_date - current_time).days))