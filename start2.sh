./rancher-compose --project-name ad-front-app \
    --url http://192.168.99.100:8080/v1/projects/1a5 \
    --access-key 6CF6BA668333D1A7ABFD \
    --secret-key eXDCEDWbvJPTahgrXFK1KFvwjWGVkaLHSPifHiJ6 \
    -f docker-compose.yml \
    --verbose up \
    -d --force-upgrade \
    --confirm-upgrade