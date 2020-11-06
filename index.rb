arr = [1, 2, 3, 4, 5]

arr.map({|ele| ele * 2})

def map(&prc)
    new_arr = []

    self.each do |ele|
        new_arr << prc.call(ele)
    end 

    new_arr
end 

my_lambda = -> (str) {puts "hello from #{str}"}

arrTwo = [1, 2, 3, my_lambda]

arrTwo[3].call("array")

hash = {fn: my_lambda}

hash[:fn].call("hash")

