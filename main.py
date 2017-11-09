import os
from flask import Flask, g,session

from routes import *
app = Flask(__name__, static_url_path='')

app.add_url_rule("/","index", index, methods=['GET'])
app.add_url_rule("/feedback","feedback", feedback, methods=['GET'])

if __name__ == '__main__':
    app.secret_key = b'\xd5"k\xad\x98\x99&\xe5\xa4\xc3\xb3-'
    app.run(debug=True)
