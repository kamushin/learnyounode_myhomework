var sum = 0;
for (argc of process.argv.slice(2)) {
	sum += Number(argc);
}
console.log(sum);

