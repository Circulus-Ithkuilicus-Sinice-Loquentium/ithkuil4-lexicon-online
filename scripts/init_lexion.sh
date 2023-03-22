# Check Deno
if ! command -v deno &> /dev/null
then
    echo "You need to install Deno before running this script"
    exit
fi

# Generate `lexion.json``
mkdir -p packages && cd packages
if [ -d "lexion-json" ] 
then
    echo "Directory \"lexion-json\" has existed. Skipped \"git clone\"."
else
    git clone --depth 1 https://github.com/Circulus-Ithkuilicus-Sinice-Loquentium/lexion-json.git
fi
cd lexion-json
deno task minify

# Copy the `lexion.json`
cd ../..
mkdir -p src/data
cp packages/lexion-json/output/minified.json src/data/lexion.ts
sed -i '1h;1!H;$!d;x;s/.*/const lexions: { [key: string]: { refers: string } } = &; export default lexions;/' src/data/lexion.ts