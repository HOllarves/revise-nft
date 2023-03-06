
// Let’s start by importing the Openzeppelin ERC-721 template into our file
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// Next, let’s add our NFT smart contract and name the NFT token (Dynamic NFT)
contract ReviseNFT is ERC721, ERC721URIStorage {
    string baseuri = "";
    constructor(string memory _baseuri) ERC721("Contra Profiles", "cProf") {
        baseuri = _baseuri;
    }
    // Last but not the least, let’s add functions to enable minting and to enable setting the _baseURI().
    function mint(address to, uint256 tokenId) public {
        _safeMint(to, tokenId);
    }

    function mintWithTokenUri(address to, uint256 tokenId, string memory tokenURI) public {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }

    function _baseURI() internal view override(ERC721) returns (string memory) {
        return baseuri;
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }
}