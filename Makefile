.PHONY: default clean install compile-all patch minor
default:
	make clean
	make install

clean:
	find . -name 'node_modules' -type d -prune -exec rm -rf '{}' + \
	
install:
	pnpm -r install

compile-all:
	pnpm run --filter app build
	pnpm run --filter local_server build

patch:
	npx zx https://raw.githubusercontent.com/jungai/all-of-my-zx/main/dist/src/push_tag.js -v patch

minor:
	npx zx https://raw.githubusercontent.com/jungai/all-of-my-zx/main/dist/src/push_tag.js -v minor