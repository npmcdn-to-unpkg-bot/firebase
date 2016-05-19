module Jekyll

	class ReactGenerator < Generator
		safe true
		priority :low

		def generate(site)
			# location of typescript compiler
			# defaults to tsc assuming in system env path
			tsc = site.config["tsc"] || "echo"

			# js destination
			js_dest = site.config["js_dest"] || "/appjs/"

			react_files = Array.new;

			site.static_files.delete_if do |sf|
				next if not File.extname(sf.path) == ".react"

				# get the dirname of file, but we don't need the site source
				react_dir = File.dirname(sf.path.gsub(site.source, ""))
				react_name = File.basename(sf.path)

				# add ts file
				react_files << ReactFile.new(site, site.source, react_dir, react_name, js_dest, tsc)
				puts sf.path
				# return true so this file gets removed from static_files
				# we'll replace it with our own tsfile that implements
				# it's own write
				true
			end

			# concat new tsfiles with static files
			site.static_files.concat(react_files)
		end
	end


	class ReactFile < StaticFile
		def initialize(site, base, dir, name, jsroot, tsc)
			super(site, base, dir, name, nil)

			@tspath = File.join(base, dir, name)
			@jsdir = jsroot
			@tsc = tsc
		end

		def write(dest)
			# js name
			react_ext = /\.react$/i
			js_name = @name.gsub(react_ext, ".js")

			# js full path
			js_path = File.join(dest, @jsdir)
			js = File.join(js_path, js_name)

			# make sure dir exists
			FileUtils.mkdir_p(js_path)
			puts js
			# execute shell command
			begin
				command = "#{@tsc} -t ES5 --out #{js} #{@tspath}"
        puts command
				`#{command}`
			end
		end
	end

end
