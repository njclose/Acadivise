import re
from pathlib import Path
from pdfquery import PDFQuery

# ADD THE ABILITY TO TYPE IN SEPERATE FILE PATHS AND OUTPUT FILES


folder_path = Path(r"..\College-Program-Helper\CU_Boulder_Class_Files")

with open(r"..\College-Program-Helper\College_Information\Courses_(CU).txt", 'w', encoding='utf-8') as file:
    for file_path in folder_path.rglob("*"):  # Use glob for specific patterns, rglob for all files
        if file_path.is_file():

            # Load the PDF
            pdf = PDFQuery(file_path)
            pdf.load()

            # Extract all LTTextLineHorizontal elements
            text_elements = pdf.pq('LTTextLineHorizontal')

            # Concatenate all the text content into a single string
            full_text = " ".join([element.text for element in text_elements if element.text])

            # Compile regex pattern
            pattern = re.compile(r"([A-Z]{4}\s\d{4})\s\((\d+|\d+[-]\d+|\d+[.]\d+)\)\s(.+?(?=  ))")

            # Prints out matches
            
            matches = pattern.findall(full_text)
            for match in matches:
                fixedMatch = ", ".join(match) + "\n"
                file.write(fixedMatch)
                        #print(match)


