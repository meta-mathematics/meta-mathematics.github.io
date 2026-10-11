# Mean Value Theorem

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** AC-01  
**Level:** Introductory    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

If $f:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable on $(a,b)$, $a<b$, prove there is $c\in(a,b)$ with $f'(c)=(f(b)-f(a))/(b-a)$.

**Foundations and permitted imports:**

Import the extreme value theorem for continuous real functions on a closed bounded interval. Fermat’s stationary-point lemma is proved below by one-sided difference quotients. Differentiability is required only in the open interval.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Rolle’s theorem
N2 [v1] Subtract the secant
  N1 -- E1: An interior point with h′(c)=0. --> N2
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | An interior point with h′(c)=0. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |

## 3. Node roles and faculty activities

### N1/v1 — Rolle’s theorem

**Object, role, and local target:** Find an interior extremum unless the function is constant. The required export is: An interior point with h′(c)=0.

**Inputs:** Continuous h with h(a)=h(b), differentiable inside; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AC-01.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain Continuous h with h(a)=h(b), differentiable inside; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Find an interior extremum unless the function is constant. |
| Sense | A corner at an extremizer prevents the derivative conclusion. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** An interior point with h′(c)=0. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Subtract the secant

**Object, role, and local target:** Make endpoints equal by an auxiliary affine function. The required export is: The specified secant slope is attained by an interior derivative.

**Inputs:** Given f and interval a<b; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AC-01.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Given f and interval a<b; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Make endpoints equal by an auxiliary affine function. |
| Sense | Division by b−a is valid because a<b. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** The specified secant slope is attained by an interior derivative. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Rolle’s theorem

1. The extreme value theorem gives a maximum and a minimum.

2. If h is constant, h′=0 at every interior point.

3. Otherwise at least one extremal value differs from the common endpoint value, so an extremizer c lies inside(a,b).

4. At an interior local maximum, difference quotients with positive step are≤0 and with negative step are≥0.

5. If the two-sided derivative exists it is therefore0.

6. At a minimum the inequalities reverse and give the same conclusion.

7. Thus Rolle’s theorem holds.

### §4.N2 — Subtract the secant

1. Set m=(f(b)−f(a))/(b−a) and h(x)=f(x)−f(a)−m(x−a).

2. It has the required regularity and h(a)=h(b)=0.

3. By Rolle there is c∈(a,b) with h′(c)=f′(c)−m=0.

4. Hence f′(c)=m, exactly the mean value theorem.

5. No differentiability at the endpoints was needed.

## 5. Worked instance and boundary audit

For f(x)=x² on[1,3], the secant slope is(9−1)/2=4. The derivative2x equals4 atc=2. The auxiliary h=x²−1−4(x−1) has its interior minimum there.

**Boundary or failed-argument audit:**

For f(x)=|x| on[−1,1], the secant slope is 0 but its derivative where defined is±1. Sense detects the absent differentiability at 0, exactly where Rolle’s extremum argument would require it.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `AC-01`, version 1, and the proof with every reuse. Intermediate exports E1–E2 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

[Branch index](../README.md)
