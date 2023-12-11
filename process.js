// Input arguments
console.log(process.argv)

// Control the process and its output.
process.exit(1)

// We can control the events of the process
process.on('exit', () => {
  // Clean the resourCes
})

// Current working directory
console.log(process.cwd())
