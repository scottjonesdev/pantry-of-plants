require 'erb'
require 'kramdown'

def render(partial_path)
  ERB.new(File.read(partial_path)).result(binding)
end

def content
	output = Array.new
	Dir.foreach("./content/posts") do |post_filename|
	if post_filename.include?("md")
	 	output.push(Kramdown::Document.new(File.read("./content/posts/#{post_filename}")).to_html)
		end
	end
	return output
end 

def filename
	file = Array.new
	Dir.foreach("./content/posts") do |post_filename|
		if post_filename.include?("md")
			file.push("#{post_filename}.html")
		end
	end
	return file
end

i = 0
while (i < content.length)
	@content = content[i]
	template = ERB.new(File.read('recipe-template.html.erb'))
	puts template.result(binding)
	file = filename[i]
	File.open(file, 'w') do |f|
		f.write(template.result)
		end
	i += 1
end