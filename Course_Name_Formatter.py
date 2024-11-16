#Directory: C:\Users\njclo\OneDrive\Documents\GitHub\College-Program-Helper\CU_Boulder_Class_Files

import re
from pdfquery import PDFQuery

# Prompt for file path
print('What is the file path?: ')
pdfPath = input()
print(f"Provided file path: {pdfPath}")

# Load the PDF
pdf = PDFQuery(pdfPath)
pdf.load()

# Extract text elements
text_elements = pdf.pq('LTTextLineHorizontal')

# Compile regex pattern
pattern = re.compile(r"([A-Z]{4}\s\d{4})\s\((\d+)\)\s(.+?)")

# Iterate over text elements and apply regex
for element in text_elements:
    text = element.get('text')  # Access text attribute of LayoutElement
    print(text)
    #if text:  # Ensure there's text to process
        #matches = pattern.findall(text)
        #for match in matches:
            #print(match)


#for text_element in text_elements:
#    font_name = text_element.get('fontname', '')
#    if 'Bold' in font_name and 'Roboto' in font_name:
#        text = text_element.text
#        #if courseAbr in text:
#        for char in text:
#           if char == ' ':
#               char = ','
#           elif char == '(' or char == ')':
#               char = ' '
#
#        print(text)