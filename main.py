from flask import Flask, render_template, request
import socket

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def index():
    user_agent = request.user_agent.string
    print(user_agent)
    if 'Mobile' in user_agent:
        return render_template('mobile_index.html')
    else:
        return render_template('mobile_index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
