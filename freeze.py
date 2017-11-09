from flask_frozen import Freezer
from main import app
# app.FREEZER_IGNORE_MIMETYPE_WARNINGS = True
freezer = Freezer(app)

if __name__ == '__main__':
    freezer.freeze()