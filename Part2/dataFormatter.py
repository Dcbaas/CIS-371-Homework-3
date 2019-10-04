import json
"""
Formats The raw item list of OSRS items and leaves only the list of id numbers.
I use python cause I like python more for this sort of thing rather than JS
More programming languages need list comprehenions 

If you want to run this code. You must put osrsItemsRaw.json into the parent
directory of part2.
"""
with open('osrsItemsRaw.json', 'r') as file:
  rawItems = json.load(file)

idList = [x['id'] for x in rawItems]

with open('osrsItems.json', 'w') as outfile:
  json.dump(idList, outfile)