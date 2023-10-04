import { Keypair,Connection, clusterApiUrl } from "@solana/web3.js";


const connection = new Connection(clusterApiUrl("devnet"));
console.log(`✅ Connected!`)

const keypair= Keypair.generate();
console.log(`✅ Generated keypair!`)
console.log(`Public key:`,keypair.publicKey.toBase58());
console.log(` key:`,keypair.secretKey);
console.log(`✅ Finished!`);
