import { Attribute, NFTEntity, Revise } from "revise-sdk"

export class ReviseService {
  private revise: Revise;

  constructor() {
    const APIKey = process.env.REVISE_API_KEY;

    if (!APIKey) {
      throw new Error("Revise API key not found");
    }

    this.revise = new Revise({ auth: APIKey });
  }

  public async createCollection({ collectionName, collectionUri }: {
    collectionName: string,
    collectionUri: string,
  }) {
    return this.revise.addCollection({
      name: collectionName,
      uri: collectionUri,
    });
  }

  public async fetchNft({ tokenId }: { tokenId: string }) {
    return this.revise.fetchNFT(tokenId);
  }

  public async createNft({ collectionId, tokenData, attributes }: {
    collectionId: string,
    tokenData: {
      image: string,
      name: string,
      tokenId: string,
      description: string,
    },
    attributes: Attribute[] | [],
  }) {
    return this.revise.addNFT(
      tokenData,
      attributes,
      collectionId
    );
  }

  public async deleteNft({ tokenId }: { tokenId: string }) {
    return this.revise.deleteNFT(tokenId);
  }

  public async fetchCollections() {
    return this.revise.fetchCollections();
  }

  public async fetchNfts({ collectionId }: { collectionId: string }) {
    return this.revise.fetchNFTs(collectionId);
  }

  public async fetchRevisions({ nftId }: { nftId: string }) {
    return this.revise.fetchRevisions(nftId);
  }

  public async updateNft({ nftId }: { nftId: string }) {
    return this.revise.updateNFT(nftId);
  }

  public async every({ durationString }: { durationString: string }) {
    return this.revise.every(durationString);
  }

  public async nft({ nft }: { nft: NFTEntity }) {
    return this.revise.nft(nft);
  }
}