# gcloud services enable run.googleapis.com
# gcloud services enable cloudbuild.googleapis.com
# gcloud services enable artifactregistry.googleapis.com

# cd couchdb
# docker buildx build -t gcr.io/<project-id>/couchdb:latest .
# docker push gcr.io/<project-id>/couchdb:latest
# gcloud run deploy couchdb \
# --image gcr.io/<project-id>/couchdb:latest \
# --platform managed \
# --region southamerica-east1 \
# --allow-unauthenticated
# --port 5000
# cd ..

# git clone https://github.com/jjoaovitor7/instabytes-api
# cd instabytes-api
# npm i
# gcloud config set run/region southamerica-east1
# gcloud run deploy --source . --port 3000
