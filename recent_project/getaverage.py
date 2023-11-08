import math

def average(values):
    if not values:
        return 0
    return sum(values) / len(values)

def get_average(student):
    homework = average(student["homework"])
    quizzes = average(student["quizzes"])
    tests = average(student["tests"])
    return 0.1 * homework + 0.3 * quizzes + 0.6 * tests

def get_letter_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

# Input values for homework, quizzes, and tests
homework_scores = [float(x) for x in input("Enter homework scores separated by spaces: ").split()]
quizzes_scores = [float(x) for x in input("Enter quiz scores separated by spaces: ").split()]
tests_scores = [float(x) for x in input("Enter test scores separated by spaces: ").split()]

# Create a dictionary to hold the input scores
student = {
    "homework": homework_scores,
    "quizzes": quizzes_scores,
    "tests": tests_scores
}

# Compute the average and the letter grade
avg_score = get_average(student)
letter_grade = get_letter_grade(avg_score)

print(f"The student's average score is {avg_score:.2f}, which corresponds to a letter grade of {letter_grade}.")
