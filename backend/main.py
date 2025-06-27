from flask import Flask, request, jsonify

from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route("/a/question")
def a_question():
    return "おもろいぶん"

@app.route("/a/answer", methods=["POST"])
def a_ansser():
    data = request.get_json()
    text = data.get("text").get("value")
    answer = data.get("answer")
    print(text, answer)
    return "suc"

@app.route("/b/question")
def b_question():
    return "おもろいのかわからんぶん"

@app.route("/b/answer", methods=["POST"])
def b_answer():
    data = request.get_json()
    text= data.get("text").get("value")
    answer = data.get("answer")
    print(text, answer)
    return "suc"

if __name__ =="__main__":
    app.run("0.0.0.0", 8080)
