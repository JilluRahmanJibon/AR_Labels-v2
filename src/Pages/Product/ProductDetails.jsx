import { useParams } from "react-router-dom";

const ProductDetails = () => {
	const { pCategory } = useParams();

	const product = [
		{
			category: "woven-label",
			title: "Woven label",
			description:
				"We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need. Also We’re constantly investing in finding the most innovative and sustainable materials.",
			img: "https://arltl.com/web-cms-arltl/uploads/p/Woven-Label.jpg",
			video: null,
		},
		{
			category: "printed-fabric-labels",
			title: "Printed Fabric Labels",
			description:
				"We’re taking the printed label concept to a whole new level. By offering a full suite of polyester and cotton label tapes in a variety of weaving textures. We print on a wide array of fibers ranging from synthetics such as polyester (satins, taffetas & acetates), tear away, nylons, poly cotton blends to natural fibers such as cotton and organic cotton. Our team of experienced designers and technicians work closely with our clients to create custom designs that perfectly match their branding requirements. We use only eco-friendly inks and materials in our production process to minimize our environmental impact and promote sustainability.",
			img: "https://arltl.com/web-cms-arltl/uploads/p/Printed-Fabric-Labels.jpg",
			video: null,
		},
		{
			category: "screen-printed-labels",
			title: "Screen Printed Labels",
			description:
				"We print on a wide array of fibers ranging from synthetics such as polyester (satins, taffetas & acetates), nylons and poly cotton blends to natural fibers such as cotton and organic cotton. Our screen printing process has superior color intensity is achieved, even on dark substrates.",
			img: "https://arltl.com/web-cms-arltl/uploads/p/Screen-Printed-Label.jpg",
			video: null,
		},
		{
			category: "heat-transfer-labels",
			title: "Heat Transfer Labels",
			description:
				"We can print heat transfers in a variety of shades using advanced color matching techniques. Through our in-house adhesive and ink formulation, we can customize any image in any size, to enhance your company’s branding. Our state-of-the-art equipment and experienced team ensure that each heat transfer print is of the highest quality, with sharp and vibrant colors that stand out. We offer a wide range of colors, designs, and textures to choose from, ensuring that we can meet the unique needs of your brand and products.",
			img: "https://arltl.com/web-cms-arltl/uploads/p/Heat-Transfer-Labels.jpg",
			video: null,
		},
		{
			category: "offset-printing-back-board",
			title: "OFFSET PRINTING & BACK BOARD",
			description:
				"We offers high-quality offset printing services for various products such as hangtags, packaging, stickers, and labels. Our offset printing services utilize advanced technology and techniques to ensure the best possible outcome for your brand. We use high-quality materials and inks to produce durable and vibrant prints. Our printing experts work closely with clients to ensure that their design is accurately replicated and printed with precision. We offer a range of customization options, including paper quality, size, and finishing, to meet your specific needs.",
			img: "https://arltl.com/web-cms-arltl/uploads/p/Hang-Tag.jpg",
			video: null,
		},
		{
			category: "paper-packaging",
			title: "Paper Packaging",
			description:
				"In addition to promotional hang tags, we can also produces a wide range of packaging solutions including sock riders, waterfall packs, wrap bands and larger format items. We use high-quality materials and inks to produce durable and vibrant prints. Our printing experts work closely with clients to ensure that their design is accurately replicated and printed with precision. We offer a range of customization options, including paper quality, size, and finishing, to meet your specific needs.",
			img: "https://arltl.com/web-cms-arltl/uploads/p/Paper-Packaging.jpg",
			video: null,
		},
		{
			category: "adhesive-labels-tags",
			title: "Adhesive Labels/Tags",
			description:
				"We can print self adhesive labels & tags on variety of materials for your brand. We can handle gloss, semi-gloss, matte, colored and even clear plastic packaging materials.",
			img: "https://arltl.com/web-cms-arltl/uploads/p/Adhesive-Labels-Tags.jpg",
			video: null,
		},
		{
			category: "barcode-labels-stickers",
			title: "Barcode Labels & Stickers",
			description:
				" We offer custom labeling and barcode printing services using thermal printing technology that ensures durability and high readability of the information. Our thermal printing unit is equipped to handle bulk orders, with fast turnaround times to ensure that our customers receive their products in a timely manner. We use eco-friendly and safe materials for our thermal printing services. Our inks and printing solutions are environmentally friendly, and we ensure that our production process adheres to all applicable regulations and standards. Our skilled technicians use the latest software to design and print customized thermal labels, tags, and stickers according to the customer's specific requirements. We offer a variety of sizes, colors, and shapes to suit the needs of our customers. ",
			img: "https://arltl.com/web-cms-arltl/uploads/p/TharmalStickers.jpg",
			video: null,
		},
		{
			category: "rubber-silicone-patch",
			title: "Rubber & Silicone Patch",
			description:
				"We offers a wide range of rubber and silicone patches to enhance the look of your garments. Our rubber and silicone patches are durable, flexible and can be customized according to your requirements. Whether you need a simple logo or a complex design, our team of experienced designers and technicians can help you create a patch that will perfectly complement your product. We use high-quality materials and advanced techniques to ensure that our patches are of the highest quality and meet the highest industry standards. Our rubber and silicone patches are ideal for a variety of garments including jackets, hats, bags, and more. They are available in a range of sizes, shapes, and colors, and can be customized with your logo or design. We pride ourselves on providing our customers with the highest level of service and quality. Contact us today to learn more about our rubber and silicone patches and how we can help you take your garments to the next level.",
			img: "https://arltl.com/web-cms-arltl/uploads/p/Ruber&Silicone-Patch.jpg",
			video: null,
		},
		{
			category: "jacron-pu-leather-patch-eco-friendly",
			title: "Jacron, PU & Leather Patch (Eco-Friendly)",
			description:
				"We produces high-quality leather badges for garments manufacturers. Our leather badges are made from premium quality leather and are available in a variety of designs and styles to suit any garment. Our leather badges can be custom-made to match the branding and design of your garments, making them a great choice for adding a personalized touch to your products. Our skilled craftsmen ensure that each leather badge is carefully crafted to the highest standards, ensuring that the finished product is durable and long-lasting. ",
			img: "https://arltl.com/web-cms-arltl/uploads/p/Jacron-PU&Leather-Patch.jpg",
			video: null,
		},
		{
			category: "seal-cord-plastic-clips-loops",
			title: "Seal Cord/Plastic Clips/Loops",
			description:
				"We offer an extensive product range in garment exterior trims and accessories such as Seal cord, Plastic clips, Loop for your brand. ",
			img: "https://arltl.com/web-cms-arltl/uploads/p/SealCord-Plastic-Clips-Loops.jpg",
			video: null,
		},
		{
			category: "twill-tape-elastic",
			title: "Twill Tape & Elastic",
			description:
				"We are remarkable entity, engaged in manufacturing & supplying an excellent range of Twill Tapes. This twill tape is designed using high grade material like cotton, linen or polyester, or wool as specified by respective buyers. We also provide “Yarn Dyed Twill Tapes” on number of designs & sizes as per the needs of customers. Our offered twill tape is used in home textile & readymade garment industry. ",
			img: "https://arltl.com/web-cms-arltl/uploads/p/Twil-Tape&Elastic.jpg",
			video: null,
		},
		{
			category: "collar-stand-butterfly",
			title: "Collar Stand & Butterfly",
			description:
				"We offers a wide range of collar stand and butterfly products that are designed to enhance the overall look of garments. Our collar stand and butterfly products are available in various sizes, colors, and styles to meet the specific needs of our clients. Also We’re constantly investing in finding the most innovative and sustainable materials. We use high-quality sustainable materials to manufacture our collar stand and butterfly products, ensuring durability and longevity. Our skilled professionals pay great attention to detail to ensure that each product is of the highest quality. We understand the importance of providing excellent customer service. We work closely with our clients to ensure that their requirements are met and that they are satisfied with our products. Whether you're looking for a classic or modern collar stand or butterfly, we have the perfect solution for you. Contact us today to learn more about our products and how we can help enhance your garments. ",
			img: "https://arltl.com/web-cms-arltl/uploads/p/Collar-Stand-Butter-Fly.jpg",
			video: null,
		},
		{
			category: "poly-bags",
			title: "Poly Bags",
			description:
				"We manufacture LLDPE, LDPE, HDPE, blister poly and hanger poly bags, including multi colors print with adhesive tape. Furthermore. We have zip-lock poly manufacturing facilities in place to cater the certain need of certain customers. We manufacture compostable, biodegradable, oxo-biodegradable, recyclable plastic bags designed to degrade through the action of living organisms. All the ingredients of our Enzyme Compound composition are ‘food grade and non-toxic’ in nature. ",
			img: "https://arltl.com/web-cms-arltl/uploads/p/PolyBag.jpg",
			video: null,
		},
		{
			category: "pvc-tpu-eva-bags",
			title: "PVC / TPU / EVA Bags",
			description:
				"We manufacture PVC, TPU, EVA Bags including multi colors print with adhesive tape. Furthermore. We have also zip-lock poly manufacturing facilities in place to cater the certain need of certain customers.",
			img: "https://arltl.com/web-cms-arltl/uploads/p/PVC-TPU-EVA Bags.jpg",
			video: null,
		},
	];

	// Find the product that matches the pCategory from the URL
	const selectedProduct = product.find(
		item => item.category.toLowerCase() === pCategory?.toLowerCase()
	);

	if (!selectedProduct) {
		return (
			<div className="flex items-center justify-center h-screen">
				<h2 className="text-2xl font-semibold text-gray-700">
					Product not found
				</h2>
			</div>
		);
	}

	return (
		<div className="w-full flex items-center justify-center">
			<div className="w-full">
				{selectedProduct.video ? (
					<div className="relative w-full h-[90vh]">
						<video
							className="w-full h-full object-cover rounded-br-[6rem]"
							src={selectedProduct.video}
							controls
							autoPlay
							muted>
							Your browser does not support the video tag.
						</video>
						<div className="absolute rounded-br-[6rem] inset-0 flex flex-col items-center justify-center text-center text-white bg-gray-900/50 p-6">
							<h1 className="text-3xl md:text-4xl font-bold mb-4">
								{selectedProduct.title}
							</h1>
							<p className="text-base md:text-lg max-w-2xl">
								{selectedProduct.description}
							</p>
						</div>
					</div>
				) : (
					<div className="relative w-full h-[90vh]">
						<img
							src={selectedProduct.img}
							alt={selectedProduct.title}
							className="w-full h-full object-cover rounded-br-[6rem]"
						/>
						<div className="absolute rounded-br-[6rem] inset-0 flex flex-col items-center justify-center text-center text-white bg-gray-900/70 p-6">
							<h1 className="text-3xl md:text-4xl font-bold mb-4">
								{selectedProduct.title}
							</h1>
							<p className="text-base md:text-lg max-w-2xl">
								{selectedProduct.description}
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductDetails;
