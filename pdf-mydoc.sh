# Note that .sh scripts work only on Mac. If you're on Windows, install Git Bash and use that as your client.

# if [ -z "$1" ]
#   then
#     echo "The command format is: pdf-mydoc.sh PDF_FILENAME VERSION"
#     exit
#   else
#     if [ -z "$2" ]
#     then
#         echo "Use the format: bash-build.sh PDF_FILENAME VERSION"
#         exit
#     fi

    # echo 'Killing all Jekyll instances'
    # kill -9 $(ps aux | grep '[j]ekyll' | awk '{print $2}')
    # clear
    #
    # echo 'Deleting all old pdfs'
    # rm pdf/$1.pdf;
    # echo "done";

    # echo "Building PDF-friendly HTML site for Mydoc ...";
    # bundle exec jekyll serve --detach --config _config.yml,pdfconfigs/config_mydoc_pdf.yml;
    # echo "done";

    # echo "Building the PDF ...";
    # prince --javascript --pdf-keywords=prince-no-fallback --input-list=_site/pdfconfigs/prince-list.txt -o pdf/$1_$2.pdf;

    # echo "Done. Look in the pdf directory to see if it printed successfully."
    #
    # open pdf/$1_$2.pdf;

    jsonfile=$(<book-list.json)

    theVersion=$(echo "$jsonfile" | jq -r .version)

    DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"


    for book in $(echo "$jsonfile" | jq -r '.books[] | @base64'); do

        sed -i .bac s/THEVERSION/${theVersion}/g ${DIR}/pdfconfigs/config_mydoc_pdf.yml

        # Get the book structure

        _jq() {
              echo ${book} | base64 --decode | jq -r ${1}
        }

        echo $(_jq '.title')
        echo $(_jq '.filename')

        for code in $(echo $(_jq '.codes') | jq -r '.[]'); do
          echo ${code}
        done



        # for code in $(_jq ${book}'.codes[]'); do
        #     echo ${code}
        # done
    done

# fi
