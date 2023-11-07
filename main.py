from flask import Flask, render_template, request

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def index():
    return render_template('mobile_index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/main_Menu')
def menu():
    return render_template('main_Menu.html')



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
