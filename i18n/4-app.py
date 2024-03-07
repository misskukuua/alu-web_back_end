#!/usr/bin/env python3

"""
This is a basic Flask application with
internationalization support using Flask-Babel.
"""

from flask import Flask, render_template, request
from flask_babel import Babel


app = Flask(__name__)


# Instantiate Babel object
babel = Babel(app)


class Config:
    """
    Configuration class for the Flask app.
    """
    # Define available languages
    LANGUAGES = ['en', 'fr']
    # Set default locale and timezone
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


# Use Config as config for the Flask app
app.config.from_object(Config)

# Define get_locale function using babel.localeselector decorator
@babel.localeselector
def get_locale() -> str:
    """Retrieves the locale for a web page.
    """
    queries = request.query_string.decode('utf-8').split('&')
    query_table = dict(map(
        lambda x: (x if '=' in x else '{}='.format(x)).split('='),
        queries,
    ))
    if 'locale' in query_table:
        if query_table['locale'] in app.config["LANGUAGES"]:
            return query_table['locale']
    return request.accept_languages.best_match(app.config["LANGUAGES"])


@app.route('/')
def index():
    """
    Render the index template.
    """
    return render_template('4-index.html')


if __name__ == '__main__':
    app.run(debug=True)
