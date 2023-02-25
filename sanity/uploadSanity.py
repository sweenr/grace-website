import os

# Directory path
path = "../content/sermonJson/"

# Iterate over each file in the directory
for filename in os.listdir(path):
    # Check if the file is a regular file (not a directory or symlink)
    if os.path.isfile(os.path.join(path, filename)):
        os.system("npx sanity documents create " + path + filename)