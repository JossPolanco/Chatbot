from flask import Blueprint, render_template

bp = Blueprint('index_view', __name__)

@bp.route('/')
def index():
    return render_template('index.html')

@bp.route('/history_view')
def hisotry_view():
    return render_template('history.html')