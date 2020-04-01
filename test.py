from flask import Flask, render_template, request
app = Flask(__name__)
@app.route('https://liu2868387941.github.io/')
def index():
   return render_template("index")

@app.route('https://liu2868387941.github.io/test.py')
def information():
   if request.method == 'GET':
      fo=open("C:\\Users\\hp\\Documents\\GitHub\\liu2868387941.github.io\\data.txt"."r")
      result = request.args.get('something')
      fo.write(result)
      fo.close()
      return render_template("https://liu2868387941.github.io/finish.html",result = result)

if __name__ == '__main__':
   app.run(host='192.168.72.61',debug = True)