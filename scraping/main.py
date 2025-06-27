import requests
from bs4 import BeautifulSoup

url = "https://kyoko-np.net/2024082001.html"
r = requests.get(url)
r.encoding = r.apparent_encoding
s = BeautifulSoup(r.text)
print(" ".join(s.find("h1").text.split(" ")[:-1]).strip())
