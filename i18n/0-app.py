#!/usr/bin/env python3

"""
This is a basic Flask application that returns
"Hello world" when accessing the root URL ('/').
"""

# import flask module
from flask import Flask, render_template


app = Flask(__name__)


# Define a route for the root URL ('/')

"""The home/index page.
"""
@app.route('/')
def index():
    return render_template('0-index.html')


"""run the flask app"""


if __name__ == '__main__':
    app.run(debug=True)
