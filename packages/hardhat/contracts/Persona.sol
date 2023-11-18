// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Persona is ERC721, ERC721URIStorage, Ownable {
    uint256 public _tokenId;
    string private _baseTokenURI;

    constructor(string memory baseURI)
        ERC721("Pronouns", "PRO")
        Ownable(msg.sender)
    {
        _baseTokenURI = baseURI;
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 newTokenId = _tokenId++;
        _safeMint(to, newTokenId);
        _setTokenURI(newTokenId, uri);
    }

    function dangerMint(address to, string memory uri) public {
        uint256 newTokenId = _tokenId++;
        _mint(to, newTokenId);
        _setTokenURI(newTokenId, uri);
    }

  //Returns the id of the next token without having to mint one.
    function nextId() external view returns(uint256) {
        return _tokenId;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }

    // The following functions are overrides required by Solidity.
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
