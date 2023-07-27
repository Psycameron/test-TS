const Arr: Array<number> = [1, 2, 3]

const check: Record<string, boolean> = {
	drive: true,
	kpp: false
}

async function test() {
	const a = await new Promise<number>((resolve, reject) => {
		resolve(1);
	})
}