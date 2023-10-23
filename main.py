from flask import Flask, render_template, request
import socket

app = Flask(__name__)

@app.route('/')
def index():
    user_agent = request.user_agent.string
    print(user_agent)
    if 'Mobile' in user_agent:
        return render_template('mobile_index.html')
    else:
        return render_template('index.html')

if __name__ == '__main__':
    # Получение внешнего IP-адреса вайфая
    hostname = socket.gethostname()
    local_ip = socket.gethostbyname(hostname)
    print(local_ip)
    # Запуск Flask на внешнем IP и порту 5000
    app.run(debug=True, host='0.0.0.0')
