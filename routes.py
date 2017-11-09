from flask import render_template, session, request, g, redirect, url_for

def index():
    return render_template('index.html')
