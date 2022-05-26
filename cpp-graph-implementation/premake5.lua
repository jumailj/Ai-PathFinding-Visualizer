--premake5.lua

workspace "cpp-graph-implementation"
	architecture"x64"
	configurations {"Debug", "Ship"}
	outputdir= "%{cfg.buildcfg}-%{cfg.system}-%{cfg.architecture}"

	
project "cpp-graph-implementation"
	location "cpp-graph-implementation"
	kind "consoleApp"
	language "C++"

	targetdir ("bin/" .. outputdir .. "/%{prj.name}")
	objdir ("bin-int/" .. outputdir .. "/%{prj.name}")

	files {"%{prj.name}/src/**.h", "%{prj.name}/src/**.cpp"}

	filter"system:windows"
		cppdialect "c++17"
		staticruntime"On"
		systemversion "latest"

	filter "configurations:Debug"
		defines "_DEBUG"
		buildoptions "/MDd"
		symbols "On"

	filter "configurations:Ship"
		defines "_SHIP"
		buildoptions "/MDd"
		optimize "On"