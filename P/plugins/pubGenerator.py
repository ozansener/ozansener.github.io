from pelican import signals
import os
import json

def publication_generator(generator):
    #Start by reading all publications
    contentpath = generator.settings.get('PATH')
    publicationpath = os.path.join(contentpath,'pubs/')

    publications = []
    if(os.path.isdir(publicationpath)):
        for i in sorted(os.listdir(publicationpath),reverse=True):
            if not i.startswith('.') and os.path.isfile(os.path.join(publicationpath, i)):
                publications.append(os.path.join(publicationpath, i))

    pubs = []
    pats = []
    for pub in publications:
        with open(pub) as data_file:
            data = json.load(data_file)
        if data["type"]=="patent":
            pub1 = {"title":data["title"],"authors":data["authors"],"venue":data["venue"],"alias":data["alias"]}
            pub1["links"] = []
            for k in data["sbrackets"]:
                pub1["links"].append({"target":data["sbrackets"][k],"value":k})
            pats.append(pub1)
        else:
            pub1 = {"title":data["title"],"authors":data["authors"],"venue":data["venue"],"alias":data["alias"]}
            pub1["links"] = []
            for k in data["sbrackets"]:
                pub1["links"].append({"target":data["sbrackets"][k],"value":k})
            pubs.append(pub1)

    for page in generator.pages:
        if page.metadata.get('title') == 'Publications':
            page.PUBLICATIONS=pubs
            page.PATENTS=pats

    return 0

# This is how pelican works.
def register():
    signals.page_generator_finalized.connect(publication_generator)
