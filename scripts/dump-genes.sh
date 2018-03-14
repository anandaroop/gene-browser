CWD=`pwd`
cd ~/artsy/src/core/gravity 
chruby-exec ruby-2.2.2 -- rails runner 'puts Gene.all.to_json(properties: :all)' | grep -vE '^D,' > $CWD/public/all_genes.json
cd $CWD