.PHONY: dist build
install:
	@npm install

dev: install
	@npm run dev

build:
	@rm -rf dist
	@npm run build

release: build
	docker build -t vikings/json2gostruct:ui .
	docker push vikings/json2gostruct:ui
