import os
import json

# Directory path
path = "content/sermons"
outPath = "content/sermonJson/"

# Iterate over each file in the directory
for filename in os.listdir(path):
    # Check if the file is a regular file (not a directory or symlink)
    if os.path.isfile(os.path.join(path, filename)) and filename.endswith('md'):
        # Open the file for reading
        with open(os.path.join(path, filename), 'r') as file:
            # Iterate over each line in the file
            sermonDict = {"_type": "sermon"}
            for line in file:
                # Do something with the line (e.g. print it)
                if(line.startswith('title')):
                    sermonDict['name'] = line.split(':')[1].strip();
                elif(line.startswith('videoUrl')):
                    sermonDict['videoUrl'] = line.split(':', 1)[1].strip();
                elif(line.startswith('date')):
                    sermonDict['publishDate'] = line.split(':')[1].strip()[0:10];

            sermonDict['name'] = sermonDict['name'].replace('1st', 'First')
            sermonDict['name'] = sermonDict['name'].replace('2nd', 'Second')
            sermonDict['name'] = sermonDict['name'].replace('3rd', 'Third')
            sermonDict['name'] = sermonDict['name'].replace('4th', 'Fourth')
            sermonDict['name'] = sermonDict['name'].replace('5th', 'Fifth')
            sermonDict['name'] = sermonDict['name'].replace('6th', 'Sixth')
            sermonDict['name'] = sermonDict['name'].replace('7th', 'Seventh')

            slug = sermonDict['publishDate'] + '-' + sermonDict['name']
            slug = slug.lower().replace(' ', '-')
            sermonDict['slug'] = {'_type': 'slug', 'current': slug}
                
            print(sermonDict)
            with open(outPath + sermonDict['slug']['current'] + '.json', 'w') as file:
                # Write the dictionary to the file in JSON format
                json.dump(sermonDict, file)