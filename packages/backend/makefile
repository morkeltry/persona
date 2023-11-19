.PHONY: web
web: 
	cd web && yarn start

abi: 
	find web/node_modules/@openzeppelin/contracts/token/ERC721 -name "*.sol" -exec solc --abi {} -o contracts/builds --overwrite \; -exec echo ABI generated for {} \;

gen:
	find contracts/builds -name "*.abi" -exec sh -c 'abigen --abi="$$1" --pkg=go_gen --out=./go_gen/"$$(basename "$$1" .abi)".go' _ {} \;

abigen2: 
	find contracts/builds -name "*.abi" -exec sh -c 'abigen --abi="$1" --pkg=go_gen --out=./go_gen/"$(basename "$1" .abi)".go' _ {} \;

## use this 
db-up:
	docker-compose up mongodb
db-down: 
	docker-compose rm mongodb -s -f -v
gen1155:
	mkdir -p ./go_gen/ERC1155 && abigen --abi=contracts/builds/ERC1155.abi --pkg=ERC1155 --out=go_gen/ERC1155/ERC1155.go \;
	
gen721:
	mkdir -p ./go_gen/ERC721 && abigen --abi=contracts/builds/ERC721.abi --pkg=ERC721 --out=go_gen/ERC721/ERC721.go \;

abigen:
	find contracts/builds -name "*.abi" -exec bash -c 'mkdir -p ./go_gen/"$$(basename "{}" .abi)" && abigen --abi="{}" --pkg=$$(basename "{}" .abi) --out="./go_gen/$$(basename "{}" .abi)/$$(basename "{}" .abi).go"' \;