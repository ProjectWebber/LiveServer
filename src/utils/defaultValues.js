const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const BUCKET_ID = import.meta.env.VITE_BUCKET_ID;

const propVazio = {
	id: "prop-vazio",
	src: `https://cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/prop-vazio/view?project=${PROJECT_ID}`,
};

const defaultSelectedProps = {
	corpos: {
		id: "corpos-m-1",
		src: `https://cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/corpos-m-1/view?project=${PROJECT_ID}`,
	},
	cabelos: {...propVazio},
	sobrancelhas: {...propVazio},
	olhos: {...propVazio},
	narizes: {...propVazio},
	bocas: {...propVazio},
	camisas: {...propVazio},
};

const categories = [
	"corpos",
	"sobrancelhas",
	"olhos",
	"narizes",
	"bocas",
	"camisas",
	"cabelos",
];

export {defaultSelectedProps, propVazio, categories};
