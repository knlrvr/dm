import Link from 'next/link'

export default function Resources() {
    return ( 
        <main className="bg-white dark:bg-gray-900">
            <div className="grid grid-cols-1 gap-2 max-w-4xl mx-auto md:grid-cols-3 lg:grid-cols-3 bg-white dark:bg-gray-900">
                <div className="text-center p-4">
                    <p className="text-xl text-center mb-2 text-gray-400">Maps</p>
                    <div className="flex flex-col space-y-2 dark:text-gray-200">
                        <Link className="hover:text-gray-400"
                            href="https://inkarnate.com/">
                            <p>World Map</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://watabou.github.io/perilous-shores/">
                            <p>Region Map</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://watabou.github.io/city-generator/">
                            <p>Settlement Map</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://app.dungeonscrawl.com/">
                            <p>Dungeon Map</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://inkarnate.com/">
                            <p>Inkarnate</p>
                        </Link>
                    </div>
                </div>
                <div className="text-center p-4">
                    <p className="text-xl text-center mb-2 text-gray-400">PC&apos;s</p>
                    <div className="flex flex-col space-y-2 dark:text-gray-200">
                        <Link className="hover:text-gray-400"
                            href="https://www.fantasynamegenerators.com/dungeons-and-dragons.php/">
                            <p>Name Generator</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.dndbeyond.com/sources/basic-rules/step-by-step-characters/">
                            <p>Creation & Design</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.wargamer.com/dnd/races">
                            <p>Races</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.wargamer.com/dnd/classes/">
                            <p>Classes</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.dndbeyond.com/races/">
                            <p>Races ( D&D Beyond )</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.dndbeyond.com/classes/">
                            <p>Classes ( D&D Beyond )</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.dndbeyond.com/sources/basic-rules/combat/">
                            <p>Combat</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.dndbeyond.com/sources/basic-rules/equipment/">
                            <p>Equipment</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://roll20.net/compendium/dnd5e/Character%20Advancement#content/">
                            <p>Experience</p>
                        </Link>
                    </div>
                </div>
                <div className="text-center p-4">
                    <p className="text-xl text-center mb-2 text-gray-400">NPC&apos;s</p>
                    <div className="flex flex-col space-y-2 dark:text-gray-200">
                        <Link className="hover:text-gray-400"
                            href="https://www.fantasynamegenerators.com/dungeons-and-dragons.php/">
                            <p>Name Generator</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.youtube.com/watch?v=-UA5eajTRIA">
                            <p>Creation & Design</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.dungeonsolvers.com/2018/04/18/how-to-create-a-memorable-dd-villain/">
                            <p>Villains</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.thegamer.com/dungeons-dragons-dungeon-master-tips-memorable-npcs/">
                            <p>Contacts & Friends</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://gamerant.com/dungeons-dragons-factions-campaign/">
                            <p>Factions & Organizations</p>
                        </Link>
                    </div>
                </div>
                <div className="text-center p-4">
                    <p className="text-xl text-center mb-2 text-gray-400">Items</p>
                    <div className="flex flex-col space-y-2 dark:text-gray-200">
                        <Link className="hover:text-gray-400"
                            href="https://www.dndbeyond.com/equipment/">
                            <p>All Items ( D&D Beyond )</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.dndbeyond.com/magic-items/">
                            <p>Magical Items ( D&D Beyond )</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.reddit.com/r/MagicItems/">
                            <p>Magical Items</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.reddit.com/r/UnearthedArcana/">
                            <p>Additions</p>
                        </Link>
                    </div>
                </div>
                <div className="text-center p-4">
                    <p className="text-xl text-center mb-2 text-gray-400">World</p>
                    <div className="flex flex-col space-y-2 dark:text-gray-200">
                        <Link className="hover:text-gray-400"
                            href="https://www.cbr.com/best-dnd-worldbuilding-tips/#get-inspiration-from-books-and-media/">
                            <p>World Building</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.dndbeyond.com/sources/basic-rules/appendix-b-gods-of-the-multiverse/">
                            <p>Pantheons</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.rjd20.com/2019/10/how-to-build-simple-settlement-for-d.html/">
                            <p>Settlement Building</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.dnd-compendium.com/dm-resources/encounters">
                            <p>Encounters</p>
                        </Link>
                    </div>
                </div>
                <div className="text-center p-4">
                    <p className="text-xl text-center mb-2 text-gray-400">Table</p>
                    <div className="flex flex-col space-y-2 dark:text-gray-200">
                        <Link className="hover:text-gray-400"
                            href="/assets/Basic-Rules.pdf" target="_blank" rel="noopener noreferrer">
                            <p>Basic Rules ( PDF )</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="/">
                            <p>Experience</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.youtube.com/watch?v=6XikjjQok5Y&list=PL7atuZxmT9570U87GhK_20NcbxM43vkom/">
                            <p>Geek And Sundry Tips</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.youtube.com/watch?v=pHPa7HwLkws&list=PLsmjZYZs1ps2cLedITUonjwjKfVSNBnf-">
                            <p>Ginny Di Tips</p>
                        </Link>
                        <Link className="hover:text-gray-400"
                            href="https://www.reddit.com/r/DnDBehindTheScreen/">
                            <p>r/DnDBehindTheScreen</p>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
