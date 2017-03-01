
NAME=sweetbasil.rocks
IMAGE=eignhpants/${NAME}

run:
	npm start

# browser-sync start --proxy "localhost:8888" --serveStatic 'public' --files 'public'
sync: run
	browser-sync start -p localhost:8888 --files 'views'

client:
	stylus -u nib views/styles/style.styl -o public/dist/style.css
	browserify --debug app/sweetbasil.rocks.js -t babelify -t pugify -o public/dist/include.js

watch:
	stylus -u nib -w views/styles/style.styl -o public/dist/style.css &
	watchify --debug app/sweetbasil.rocks.js -t babelify -t pugify -o public/dist/include.js -v -v --poll=1000 &

copy:
	-cp node_modules/bootstrap/dist/css/bootstrap.min.css public/css/bootstrap.min.css

tag-docker:
	docker build --no-cache -t ${IMAGE} .
	docker tag ${IMAGE}:latest ${IMAGE}:stable
	docker push ${IMAGE}:stable
