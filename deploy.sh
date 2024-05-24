echo "Switching to master"

git checkout master

echo "Building app..."

npm run build

echo "Deploying files to server..."
scp -r build/* root@5.182.26.95:/var/www/html/

echo "Done !"