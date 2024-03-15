FROM python:3.10

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# copy entrypoint.sh
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

COPY . .

EXPOSE 8000

# run entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]
