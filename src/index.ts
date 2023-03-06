import dotenv from 'dotenv';
import { ReviseService } from './services/revise'

(async () => {

  dotenv.config();

  const revise = new ReviseService()

  const nft = await revise.createNft({
    attributes: [{
      "name": "Henry Ollarves",
    }],
    tokenData: {
      description: "Henry Ollarves's profile on Contra",
      image: "https://i.ibb.co/stf9xFQ/anime-profile.jpg",
      name: "Henry Ollarves",
      tokenId: "1"
    },
    collectionId: "91ddff94-ef15-439e-8b76-d75cadcc9a85",
  })

  const reviseNft = await revise.fetchNft({ tokenId: nft.id })

  await (await revise.nft({ nft: reviseNft }))
    .setProperty("name", "Henry Ollarves")
    .setProperty("title", "Enthusiast developer")
    .setProperty("contra_pick", "true")
    .setProperty("display_username", "henry")
    .setProperty("display_email", "henry.ollarves@contra.com")
    .setProperty("auto_rating", 9)
    .setProperty("location_name", "Barcelona, Spain")
    .setProperty("paid_projects_total_count", 7)
    .setProperty("primary_job_posting_category", "ENGINEERING")
    .save()

})();